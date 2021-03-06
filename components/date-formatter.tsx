import { parseISO, format } from 'date-fns'

interface Props {
  dateString: string
}

export default function DateFormatter(props: Props) {
  const { dateString } = props
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
