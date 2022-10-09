import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screen/Cart';
import ChatRoom from '../Screen/ChatRoom';
import Home from '../Screen/Home';
import OrderPageDetils from '../Screen/OrderPageDetail';
import TabNavigation from './TabNavigator';
import RecentOrders from '../Screen/RecentOrders';
import ModelAddress from '../Screen/ModelAddress';
const Stack = createNativeStackNavigator();
const MainNavigation=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='mainhome' component={TabNavigation}/>
            <Stack.Screen name='Cart' component={Cart}/>
            <Stack.Screen name='ChatRoom' component={ChatRoom}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='OrderPageDetils' component={OrderPageDetils}/>
            <Stack.Screen name='Address' component={ModelAddress}/>
            <Stack.Screen name='RecentOrders' component={RecentOrders}/>
        </Stack.Navigator>
    )
}
export default MainNavigation;