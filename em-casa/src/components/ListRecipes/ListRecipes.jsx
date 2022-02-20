import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./ListRecipes.css";
import Image1 from './img1.jpg'
import Recipes from '../Recipes/Recipes';


export default function ListRecipes() {
    const recipes = [
        {
            recipeUrl: '#',
            title: 'Macarrão sem Glúten',
            image: Image1,
            content: 'Pensando em facilitar a vida de pessoas celíacas, preparamos um menu com opções livre de glúten.'
        },
        {
            recipeUrl: '#',
            title: 'Macarrão sem Glúten',
            image: Image1,
            content: 'Pensando em facilitar a vida de pessoas celíacas, preparamos um menu com opções livre de glúten.'
        },
        {
            recipeUrl: '#',
            title: 'Macarrão sem Glúten',
            image: Image1,
            content: 'Pensando em facilitar a vida de pessoas celíacas, preparamos um menu com opções livre de glúten.'
        },
        {
            recipeUrl: '#',
            title: 'Macarrão sem Glúten',
            image: Image1,
            content: 'Pensando em facilitar a vida de pessoas celíacas, preparamos um menu com opções livre de glúten.'
        }
    ]

    const _onBtnClick = (recipeUrl) => {
        return (
            <a href={recipeUrl}></a>
        )
    }

    const renderHeader = (image) => {
        return (
            <img alt='Card' src={image} width='250' />
        )
    }

    const renderCard = (recipeUrl, title, image, content) => {
        return (
            <div className='col'>
                <Card 
                    title={title}
                    footer={renderFooter(recipeUrl)}
                    header={renderHeader(image)}
                >{content}</Card>
            </div>
        )
    }

    const renderFooter = (recipeUrl) => {
        return (
            <span>
                <Button className="botao" label="Selecionar" icon="pi pi-check" onClick={_onBtnClick(recipeUrl)} />
                <Button label="Cancelar" icon="pi pi-times" className="p-button-secondary-ml-2 ms-1" />
            </span>
        )
    }

    return (
        <div className='cards-grid m-3'>
            <div className="container d-flex justify-content-around">
                <div className="row">
                    {
                        recipes.map((recipe) => {
                            return renderCard(recipe.recipeUrl, recipe.title, recipe.image, recipe.content)
                        })
                    }
                </div>
            </div>
        </div>
    )

  
}
