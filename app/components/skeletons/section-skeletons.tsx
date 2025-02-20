import { Skeleton } from "@/app/components/ui/skeleton"

export function AboutSkeleton() {
  return (
    <div className="space-y-8 py-12">
      <Skeleton className="h-12 w-3/4 max-w-lg" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-full max-w-2xl" />
        <Skeleton className="h-4 w-5/6 max-w-xl" />
        <Skeleton className="h-4 w-4/5 max-w-lg" />
      </div>
    </div>
  )
}

export function ProjectsSkeleton() {
  return (
    <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-4 rounded-lg border p-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-6 w-3/4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function ContactSkeleton() {
  return (
    <div className="space-y-6 py-12">
      <Skeleton className="h-12 w-3/4 max-w-lg" />
      <div className="space-y-4">
        <Skeleton className="h-12 w-full max-w-md" />
        <Skeleton className="h-12 w-full max-w-md" />
        <Skeleton className="h-32 w-full max-w-md" />
        <Skeleton className="h-12 w-32" />
      </div>
    </div>
  )
}