import { createStackNavigator } from "@react-navigation/stack";
import AccountsDetail from "./AccountDetail";
import Settings from "./Settings";
import Home from "./Home";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeAccount" component={Home} />
      <Stack.Screen name="Account" component={AccountsDetail} />
    </Stack.Navigator>
  );
};

export { HomeScreenNavigator };

const SettingScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabSetting" component={Settings} />
    </Stack.Navigator>
  );
};

export { SettingScreenNavigator };
