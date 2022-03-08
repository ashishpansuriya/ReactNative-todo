import React, { useState ,useEffect} from "react";
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView } from "react-native";
import Card from "../comonent/Card";
import Input from "../comonent/Input";
import MyButton from "../comonent/MyButton";
import NumberContainer from "../comonent/NumberContainer";
import colors from "../Constants/colors";


const StartGameScreen = props => {

    const [enteredValue, setEnterValue] = useState('');
    const [confirmed,setConfirmed] = useState(false);
    const [selectNumer, setSelectNumer] = useState();
    const [buttonWidth , setButtonWidth] = useState( Dimensions.get('window').width / 4);



    const numberInputHandler = inputText => {
        setEnterValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnterValue('');
        setConfirmed(false);
    };

    const confirmHandler = () =>{

        const chooseNumber = parseInt(enteredValue);
        if(isNaN(chooseNumber)  || chooseNumber <= 0 || chooseNumber > 99){
            Alert.alert('Invalid Number !' , 'Number has to be a number between 1  and 99. ' ,[{text : 'okay' ,style : 'destructive',onPress : resetInputHandler   }]);  
            return;
        }

        setConfirmed(true);
        setSelectNumer(chooseNumber);
        setEnterValue('');
        Keyboard.dismiss();
    };

    let confirmedOutPut;
    if(confirmed){ 
        confirmedOutPut =
            (<Card style={{ marginVertical: 20, width: '80%' }}>
                <Text style = {{textAlign : 'center'}}>You selected</Text>

                <NumberContainer> {selectNumer}</NumberContainer>

            <MyButton
                onPress={() => props.onStartGame(selectNumer)}
            >START GAME</MyButton>
            </Card>);

    }

    useEffect(()=>{
        

        const styleButton = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };

        Dimensions.addEventListener('change',styleButton);

        return ()=>{
            Dimensions.removeEventListener('change',styleButton);
        };
    });

   
    return (
        <TouchableWithoutFeedback
            onPress={() => { Keyboard.dismiss(); }}>
            <ScrollView>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>

        <View style={styles.screen}>
                <Text style={styles.heading}>Start The Game</Text>

            <Card style={styles.inputContainer}>
                
                <Text style={{fontFamily : 'OpenSans-Regular'}}>Select A Number !</Text>

                    <Input
                        style={styles.input}
                        keyboardType={"number-pad"}
                        maxLength='2'
                        blurOnSubmit
                        onChangeText={numberInputHandler}
                        value={enteredValue} />

                <View style={styles.buttonContainer}>
                        <View style={{buttonWidth}}>
                            <Button title='Reset' onPress={resetInputHandler} color={colors.accent} >
                        
                            </Button>
                        </View>

                        <View style={{buttonWidth}}>
                            <Button title='Confirm' onPress={confirmHandler} color={colors.primary} />
                        </View>

                </View>
            </Card>
            {confirmedOutPut}
        </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({

    heading: {
        textAlign: 'center',
        fontSize: 20, 
        color: 'black',
        fontFamily:'OpenSans-Bold',
        marginVertical: 20,
        fontSize: 20
    },

    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    inputContainer: {
        minWidth: 300,
        width: '80%',
        maxWidth: '95%',
        alignItems: 'center'
    },
    // buttons: {

    //     width: buttonWidth,
    //     alignItems: 'center'
    // },
    input: {
        width: '95%',
        borderRadius: 6,
        textAlign: 'center'
    }
});

export default StartGameScreen;