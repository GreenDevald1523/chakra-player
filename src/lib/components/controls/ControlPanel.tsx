import PropTypes from 'prop-types'
import { Center, Text } from '@chakra-ui/react'

function ControlPanel({ duration, currentTime, color }) {
  function secondsToHms(seconds) {
    if (!seconds) return '00:00'

    let totalTime: number = seconds

    const hours: number = Math.trunc(totalTime / 3600)
    totalTime %= 3600

    const min: number = Math.trunc(totalTime / 60)
    totalTime %= 60

    const sec: number = Math.trunc(totalTime)

    let hoursStr: string
    let minStr: string
    let secStr: string

    if (hours < 10) hoursStr = `0${hours}`
    if (min < 10) minStr = `0${min}`
    if (sec < 10) secStr = `0${sec}`

    if (hours > 0) {
      return `${hours}:${min}:${sec}`
    }
    if (min > 0) {
      return `${min}:${sec}`
    }
    return `00:${sec}`
  }

  return (
    <Center minW="7em">
      <Text fontSize="md" color={color}>
        {secondsToHms(currentTime)}/
      </Text>
      <Text fontSize="md" color={color}>
        {secondsToHms(duration)}
      </Text>
    </Center>
  )
}

ControlPanel.propTypes = {
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}
export default ControlPanel
