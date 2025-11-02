import { APP_URL, APP_VERSION } from "@/env"
import axios from "axios"

const httpClient = axios.create({
  baseURL: APP_URL,
  headers: {
    "accept": "application/json",
    "app-version": APP_VERSION,
  },
  withCredentials: true,
  withXSRFToken: true,
  validateStatus: (status) => ![404, 408, 429, 500, 502, 503, 504].includes(status)
})

httpClient.interceptors.request.use(
  (config) => {

    if (config.url) {
      config.url = config.url.replace(/\/+$/, "")
    }

    return config
  }
)

httpClient.interceptors.response.use(
  (response) => {

    if (
      response.status === 400
    ) {
      return Promise.reject(new Error(response.data.message))
    }

    if (
      response.status === 403
    ) {
      return Promise.reject(new Error(response.data.message))
    }

    if (
      response.status === 422
    ) {
      return Promise.reject(new Error(response.data.message, {
        cause: response.data.errors,
      }))
    }

    return response
  },
  (data) => {

    if (data.code === "ERR_NETWORK") {

      return Promise.reject(new ErrorConnection(
        "Gagal terhubung, Pastikan internet / perangkat utama aktif"
      ))
    }

    if (data.code === "ECONNABORTED") {

      return Promise.reject(new ErrorConnection(
        "Jaringan tidak stabil, proses ini memerlukan jaringan internet stabil"
      ))
    }

    return Promise.reject(data)
  }
)

export class ErrorConnection extends Error {
}

export class ErrorAuthorization extends Error {
}

export default httpClient
