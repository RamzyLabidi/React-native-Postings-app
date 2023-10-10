import {useState} from 'react';
import { View, 
        Text,
        TextInput,
        TouchableOpacity,
        Image,
        FlatList 
} from 'react-native'
import {useRouter} from 'expo-router';
import styles from './welcome.style';
import {COLORS, icons, SIZES} from '../../../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-virtualized-view'

const jobTypes =["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')  
  return (
    <View>
      <View style ={styles.container}>
      <Text style={styles.userName}>hello motherfuckers</Text>
      <Text style={styles.welcomeMessage}>find your next time wasting shithole</Text>
      </View>
    
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>

      <TextInput
      style = {styles.searchInput}
      value = ""
      onChange={() => {}}
      placeholder="What are you searching for?"
      placeholderTextColor={COLORS.gray}
      
      
      />
      
      </View>
      <TouchableOpacity style= {styles.searchBtn}>
        <Image source={icons.search}
        resizeMode='contain'
        style={styles.searchBtnImage}

        />

        
      </TouchableOpacity>
    </View>
    <View styles = {styles.tabsContainer}>
      <FlatList 
      data = {jobTypes}
      renderItem={({item})=>(
        <TouchableOpacity 
        style={styles.tab(activeJobType, item)}
        onPress ={()=> {
          setActiveJobType(item);
          router.push('/search/${item}')
        }}
        
        
        >
          <Text style ={styles.tabText(activeJobType, item)}> {item}</Text>   

        </TouchableOpacity>

      )}
      keyExtractor={item => item}
      contentContainerStyle={{columnGap: SIZES.small}}
      horizontal
      />


    </View>
    </View>
  
  )
}

export default Welcome