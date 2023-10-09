import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import styles from "../css/MainScreenStyle";

const MainScreen = () => {
  const [value, setValue] = useState("0");
  const [bracketopen, setbracketopen] = useState(false);

  const handlePress = (val) => {
    console.log("pressed", val);
    if (val == "AC") {
      setValue("0");
    } else if (val == "()") {
      if (value == '0') {
        setValue('(')
        setbracketopen(true)
      }
      else if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.')
              {
                setValue(value + '(')
                setbracketopen(true)
              }
      else {
        if (bracketopen == true) {
          setValue(value + ')')
          setbracketopen(false)
        }
        else 
        {
          setValue(value + '(')
          setbracketopen(true)
        }
      }
    } else if (val == "=") {
      try {

        if((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length ) {
            // console.log('equal brackets');

            if(value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.') {
              setValue(`${eval(value.replace('()' , '(0)').slice(0,-1))}`)
            } 
            else {
              setValue(`${eval(value.replace('()' , '(0)'))}`)
            }
        }

        // else {
        //   console.log('unequal brackets');
        // }

      }
      catch (e) {
        setValue('Format Error');
      }
    } else if (value == 'Format Error') {
      setValue(val)
    }
    else if (val == "back") {
      setValue(value.slice(0,-1));
    } else {
      if (value == "0") {
        if (isNaN(val)) {
          setValue(value + val);
        } else {
          setValue(val);
        }
      } 
      else if (isNaN(val)) {
        if(value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.') {
          setValue(value.slice(0,-1)+val)
        } else {
          setValue(value + val)
        }
        // console.log(value);
        // setValue(value + val)
      }
      else {
        setValue(value + val);
      }
    }
  };

  return (
    <View style={styles.main_screen}>
      <ScrollView style={styles.main_screen_display}>
        <Text style={styles.main_screen_display_text}>{value}</Text>
      </ScrollView>
      <View style={styles.main_screen_keypad}>
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress("AC")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>AC</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("()")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>
                {/* &#33; */}
                &#40; &#41;
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("%")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>&#37;</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("/")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>&#8725;</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress("7")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>7</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("8")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>8</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("9")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>9</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("*")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>&#8727;</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress("4")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>4</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("5")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>5</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("6")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>6</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("-")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>&#8722;</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress("1")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>1</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("2")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>2</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("3")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>3</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("+")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>&#43;</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={() => handlePress("0")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>0</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(".")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>&#8729;</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("back")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg2_button}>&gt;</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("=")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>&#61;</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
