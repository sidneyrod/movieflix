import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import movieImage from '../../core/assets/movie-image.png';
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export default function MovieCard() {
    return (
        <View style={styles.container}>
            <Image
                source={movieImage}
                style={styles.image}
            />

            <View style={styles.infosContainer}>
                <Text style={styles.title}>
                    O Retorno do Rei
                </Text>

                <Text style={styles.year}>
                    2003
                </Text>

                <Text style={styles.subtitle}>
                    O olho do inimigo está se movendo
                </Text>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        activeOpacity={0.5}
                    >
                        <Text style={styles.buttonText}>
                            Ver detalhes
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 420,
        backgroundColor: colors.mediumGray,
        borderRadius: 10,
        marginBottom: 20
    },

    image: {
        width: '100%',
        height: 220,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: 'stretch',
    },

    infosContainer: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        flex: 1,
        height: '100%'
    },

    title: {
        fontFamily: fonts.title,
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.015,
        color: colors.white
    },

    year: {
        fontFamily: fonts.title,
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.015,
        color: colors.yellow
    },

    subtitle: {
        fontFamily: fonts.text,
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: -0.015,
        color: colors.subtitleLight,
        marginVertical: 10
    },

    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    buttonContainer: {
        width: '100%',
        maxWidth: 400,
        height: 40,
        borderWidth: 1,
        borderColor: colors.whiteBorder,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontFamily: fonts.title,
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.015,
        color: colors.white,
        textTransform: 'uppercase'
    }
})
