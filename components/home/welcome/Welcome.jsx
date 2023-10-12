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

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')  
  return (
    <View>
      <View style ={styles.container}>
      <Text style={styles.userName}>Good morning and if I don't see you good afternoon and good night</Text>
      <Text style={styles.welcomeMessage}>find your next Job</Text>
      </View>
    
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>

      <TextInput
      style = {styles.searchInput}
      value = {searchTerm}
      onChangeText={(text) => setSearchTerm(text)}
      placeholder="What are you searching for?"
      placeholderTextColor={COLORS.gray}
      
      
      />
      
      </View>
      <TouchableOpacity style= {styles.searchBtn} onPress = {handleClick}>
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

export default Welcome;