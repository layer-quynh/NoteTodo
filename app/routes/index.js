import { StackNavigator } from 'react-navigation'
import AboutRoutes from './about.routes.js'
import HomePage from '../pages/Home.page'

const Router = StackNavigator({
    home: {screen: HomePage,
        navigationOptions: {
            title: 'Start taking notes!'
        }
    },
    about: {
        screen: AboutRoutes
    }
})

export default Router