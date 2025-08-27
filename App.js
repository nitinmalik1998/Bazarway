import { createStackNavigator } from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import Started from './src/screen/Started';
import Signup from './src/screen/Signup';
import Password from './src/screen/Password';
import Carouselscreen from './src/screen/Carouselscreen';
import Recoverypassword from './src/screen/Recoverypassword';
import Setuppassword from './src/screen/Setuppassword';
import Login from './src/screen/Login';
import TabNavigation from './src/Navigation/TabNavigation';
import Chooseslot from './src/screen/Chooseslot';
import Productscreen from './src/screen/Productscreen';
import Appointment from './src/screen/Appointment';
import Orderconfirmation from './src/screen/Orderconfirmation';
import Selectdatetime from './src/screen/Selectdatetime';
import Filter from './src/screen/Filter';
import Checkout from './src/screen/Checkout';



const Stack = createStackNavigator();

function RootNavigation() {
  return (
<NavigationContainer>
    <Stack.Navigator>
         <Stack.Screen name="Started" component={Started} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
      <Stack.Screen name="Password" component={Password} options={{headerShown: false}}/>
        <Stack.Screen name="Carouselscreen" component={Carouselscreen} options={{headerShown: false}}/>
         <Stack.Screen name="Recoverypassword" component={Recoverypassword} options={{headerShown: false}}/>
        <Stack.Screen name="Setuppassword" component={Setuppassword} options={{headerShown: false}}/>
         <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown: false}}/>
          <Stack.Screen name="Chooseslot" component={Chooseslot} options={{headerShown: false}}/>
          <Stack.Screen name="Productscreen" component={Productscreen} options={{headerShown: false}}/>
           <Stack.Screen name="Appointment" component={Appointment} options={{headerShown: false}}/>
             <Stack.Screen name="Checkout" component={Checkout} options={{headerShown: false}}/>
           <Stack.Screen name="Orderconfirmation" component={Orderconfirmation} options={{headerShown: false}}/>
      
      <Stack.Screen name="Selectdatetime" component={Selectdatetime} options={{headerShown: false}}/>
  <Stack.Screen name="Filter" component={Filter} options={{headerShown: false}}/>

    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;