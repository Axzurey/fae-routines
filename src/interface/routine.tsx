import { Spacer, Text } from "@chakra-ui/react"
import { MotionBox } from "../components/MotionBox"
import { colors } from "../theme"
/**
 * format for runsAt is as follows:
 * 
 * !n : once, when system unix time is n
 * &n : every day, at the specified time
 * n[] : in the case of an array, the above is respected for each element
 * #k : every time when the key combo(k) is pressed
 */

export interface ScriptRoutine {
    routineType: 'script'
    path: string
    args: string[]
    name: string
    runsAt: string | string[]
}

export interface WebpageRoutine {
    routineType: 'webpage'
    url: string
    name: string
    runsAt: string | string[]
}

export type RoutineType = ScriptRoutine | WebpageRoutine //add more routine types here

interface RoutineDisplayProps {
    routine: RoutineType
}

export function RoutineDisplay(props: RoutineDisplayProps) {
    return <MotionBox display='flex' width='100%' minHeight='7vh' maxHeight='8vh' bg='blackAlpha.600'>
        <MotionBox bg='#66FF66' width='2%' height='100%'>
            
        </MotionBox>
        <Text pl='1%' color={colors.primaryText}>
            {props.routine.name}
        </Text>
    </MotionBox>
}