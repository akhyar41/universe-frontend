import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useEffect, useMemo, useState } from "react"


export function CalendarMonth({ selected, onSelect }: {
  selected: Date | undefined
  onSelect: (date: Date) => void
}) {

  const [currentDate, setCurrentDate] = useState<Date>(selected || new Date())

  const months = useMemo(() => {

    const year = currentDate.getFullYear()

    return Array
      .from(
        { length: 12 },
        (_, i) => new Date(year, i, 1)
      )
  }, [currentDate])

  const handleYearPrev = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setFullYear(prev.getFullYear() - 1)
      return newDate
    })
  }

  const handleYearNext = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setFullYear(prev.getFullYear() + 1)
      return newDate
    })
  }

  const handleSelectMonth = (monthIndex: number) => {

    setCurrentDate((prev) => {
      const newDate = new Date(prev.getFullYear(), monthIndex, 1)
      onSelect(newDate)
      return newDate
    })

  }


  useEffect(() => {
    if (selected) {
      setCurrentDate(selected)
    }
  }, [selected])

  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between px-1">
        <Button
          variant="outline"
          className="p-0 opacity-50 transition-colors size-7"
          onClick={handleYearPrev}
        >
          <ChevronLeftIcon/>
        </Button>
        <div className="text-sm font-bold">
          {currentDate.getFullYear()}
        </div>
        <Button
          variant="outline"
          className="p-0 opacity-50 transition-colors size-7"
          onClick={handleYearNext}
        >
          <ChevronRightIcon/>
        </Button>
      </div>
      <div className="grid grid-cols-3 text-center">
        {months.map((monthDate) => {

          const year = monthDate.getFullYear()
          const month = monthDate.getMonth()

          const isSelected =
            selected &&
            selected.getFullYear() === year &&
            selected.getMonth() === month

          return (
            <Button
              key={month}
              variant="ghost"
              className={
                "h-auto px-1.5 py-2 text-xs" + (isSelected ? " bg-muted" : "")
              }
              onClick={() => handleSelectMonth(month)}>
              {monthDate.toLocaleString("id", { month: "long" })}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
