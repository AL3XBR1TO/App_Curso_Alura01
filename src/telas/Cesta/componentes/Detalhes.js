import React from "react";
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

import Texto from "../../../componentes/Texto";


export default function Cesta({nome, logoFazenda, nomeFazenda, descricao, preco, botao }){
    return <>
        <Texto style={estilos.nome} >{ nome }</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.descricao}>{ descricao}</Texto>
        <Text style={estilos.preco}>{ preco }</Text>

        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}> {botao} </Texto></TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda:{
        width: 50,
        height:50
    },
    nomeFazenda:{
        marginLeft: 12,
        fontSize: 16,
        lineHeight: 26,
    },
    descricao:{
        //marginLeft: 12,
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,        
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,

    },
    textoBotao: {
        textAlign: "center",
        color: "#464646",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    },
})