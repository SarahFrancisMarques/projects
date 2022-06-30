import React from 'react';
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/75794109?s=400&u=2b624c64eb5fa0fd23f9bedd40f4539c3c9f7f96&v=4';

const urlToMyGithub = 'https://github.com/SarahFrancisMarques';

const App = () => {

    const handlePressGoToGithub = async() => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        
        if(res){
            console.log('Link aprovado');
            console.log('Abrindo link ...');
            await Linking.openURL(urlToMyGithub);
        }
    };
    return (
        <SafeAreaView style = {style.container}>
            <StatusBar backgroundColor={colorGithub}barStyle="light-content" 
            />
            <View style={style.content}>
                <Image 
                accessibilityLabel="Sarah no quarto com fundo azul" 
                style={style.avatar}
                source={{ uri:imageProfileGithub }}
                />
                <Text 
                accessibilityLabel = "Nome: Sarah Francis" style={[style.defaultText, style.name]}>Sarah Francis</Text>
                <Text accessibilityLabel = "Nickname: SarahFrancisMarques"style={[style.defaultText, style.name]}>SarahFrancisMarques</Text>
                <Text accessibilityLabel =  "Descriçao:Eu estou iniciando no universo da programação..."style={[style.defaultText, style.name]}>Eu estou iniciando no universo da programação...</Text>

                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.Textbutton]}>
                        Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { 
        //colunas
        backgroundColor: colorGithub,
        flex: 1, //expadir a cor para tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        alignItems: 'center',
        padding: 20,

    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color:colorFontGithub,
    },
    name: {
        fontSize: 24,
        margin: 20,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 14 ,
        fontWeight: 'bold',
    },
    button:{
        marginTop: 20,
        backgroundColor:colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    Textbutton:{
        fontWeight: 'bold',
        fontSize: 16,
    },

});
