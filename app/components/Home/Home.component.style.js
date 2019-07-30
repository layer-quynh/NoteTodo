import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'
import { headingText, textInput } from '../../styles/common.style'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: theme.CONTAINER_PADDING,
        alignItems: 'center'
    },
    titleHeading: {
        ...headingText
    },
    titleTextInput: {
        ...textInput
    },
    textAreaTitle: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        alignSelf: 'flex-start',
        padding: 10,
        fontStyle: 'italic'
    },
    textArea: {
        flex: 1,
        ...textInput
    },
    bottomBar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomBarWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    saveBtn: {
        padding: 10,
        fontWeight: theme.FONT_WEIGHT_BOLD
    },
    characterCount: {
        padding: 10,
        fontSize: theme.FONT_SIZE_SMALL
    }
})