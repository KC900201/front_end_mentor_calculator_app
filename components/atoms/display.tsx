interface DisplayProps {
  value: string
}

const Display = ({ value }: DisplayProps) => {
  return (
    <div className="mb-6 flex h-32 w-full items-center justify-end rounded-xl bg-(--color-screen-bg) px-8 text-(--color-text-display)">
      <span className="overflow-hidden text-[56px] font-bold text-ellipsis whitespace-nowrap">
        {Number(value).toLocaleString("en-US", { maximumFractionDigits: 10 })}
      </span>
    </div>
  )
}

export default Display
