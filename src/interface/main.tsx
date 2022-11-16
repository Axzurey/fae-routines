import { Box, IconButton, VStack } from "@chakra-ui/react";
import { colors } from "../theme";
import { BsPlus } from 'react-icons/bs';
import { RoutineDisplay, RoutineType } from './routine';

export function MainInterface() {

    const testData = [
        {
            routineType: 'webpage',
            name: 'Open Pornhub',
            runsAt: '&15',
            url: 'https://roblox.com/home'
        },
        {
            routineType: 'script',
            name: 'Run poop.bat',
            runsAt: '&12',
            path: 'C:/Users/me/Program Files/poop.bat',
            args: ['%x', '%h']
        },
    ] as RoutineType[];

    return <Box
        width='100vw'
        height='100vh'
        bg={colors.background}
    >
        <VStack pl='20%' width='80%' height='80vh'>
            {
                testData.map((v) => 
                    (<RoutineDisplay routine={v}></RoutineDisplay>)
                )
            }
        </VStack>
        <Box display='flex' width='5vw' height='5vw' pb='10vh'>
            <IconButton
                color={colors.primary}
                icon={<BsPlus size='100%'></BsPlus>}
                aria-label='new routine'
                width='100%'
                height='100%'
                rounded='full'
            />
        </Box>
    </Box>
}