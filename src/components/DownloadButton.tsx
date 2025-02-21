"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function DownloadButton() {
  return (
    <Button className="print:hidden" onClick={() => window.print()}>
      <Download className="mr-2 h-4 w-4" />
      Tải CV
    </Button>
  )
}