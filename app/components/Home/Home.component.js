import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './Home.component.style.js'
import TextArea from '../TextArea/TextArea.component'

class Home extends Component {
    render() {
        const {setText, setTitle, text, title} = this.props
        return(
            <View style={styles.container}>
                <Text style={styles.titleHeading}>Note Title</Text>
                <TextInput
                    style={styles.titleTextInput}
                    onChangeText={setTitle}
                    value={title} />
                <Text style={styles.textAreaTitle}>
                    Please enter your note below!
                </Text>
                <TextArea style={styles.textArea}
                            onTextChange={setText}
                            text={text} />
                <View style={styles.bottomBar}>
                    <View syle={styles.bottomBarWrapper}>
                        <Text style={styles.saveBtn}>Save</Text>
                        <Text style={styles.characterCount}>{text.length} Characters</Text>
                    </View>
                </View>
            </View>
        )
    }
}

Home.propTypes = {
    setTitle: PropTypes.func,
    setText: PropTypes.func,
    title: PropTypes.string,
    text: PropTypes.string  
}

export default Home