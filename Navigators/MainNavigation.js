import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screen/Shopper/Cart';
import ChatRoom from '../Screen/ChatRoom';
import OrderPageDetils from '../Screen/Shopper/ShopperOrderPageDetail';
import TabNavigation from './TabNavigator';
import ModelAddress from '../Screen/ModelAddress';
import SellerAccount from '../Screen/Seller/SellerAccount';
import ShopperOrderPageDetail from '../Screen/Shopper/ShopperOrderPageDetail';
import ShopperProductDetails from '../Screen/Shopper/ShopperProductDetails';
import ShopperRecentOrders from '../Screen/Shopper/ShopperRecentOrders';
import SellerProductEdit from '../Screen/Seller/SellerProductEdit';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='mainhome' component={TabNavigation} />
            <Stack.Screen name='Cart' component={Cart} />
            <Stack.Screen name='ChatRoom' component={ChatRoom} />
            <Stack.Screen name='SellerProductEdit' component={SellerProductEdit} />
            <Stack.Screen name='OrderPageDetail' component={ShopperOrderPageDetail} />
            <Stack.Screen name='Address' component={ModelAddress} />
            <Stack.Screen name='RecentOrders' component={ShopperRecentOrders} />
            <Stack.Screen name='ProductDetail' component={ShopperProductDetails} />
            <Stack.Screen name='SellerAccount' component={SellerAccount} />
        </Stack.Navigator>
    )
}
export default MainNavigation;