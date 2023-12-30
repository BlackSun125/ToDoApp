import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Project from '../Screens/Project'
import Detail from '../Screens/Detail'
import TaskDetail from '../Screens/TaskDetail'
import CountTime from '../Screens/CountTime'
const Stack = createNativeStackNavigator();

function StackProject() {
  return (
    <Stack.Navigator initialRouteName="Project"  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Project" component={Project} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="TaskDetail" component={TaskDetail} />
      <Stack.Screen name="CountTime" component={CountTime} />
    </Stack.Navigator>
  );
}
export default StackProject;