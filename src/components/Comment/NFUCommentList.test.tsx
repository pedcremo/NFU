import React from "react";
import NFUCommentList from './NFUCommentList';
import { AppContextProvider } from "../../State";
import { render,fireEvent } from '@testing-library/react'

test('Render comments', () => {
    const comments = [
        {
          "id": 1,
          "title": "Test 1.1",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum elementum augue, eu vestibulum dui venenatis at. In a iaculis quam, id vulputate augue. Quisque hendrerit elementum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ut mi a felis rhoncus convallis. Fusce ultrices cursus leo, ac tincidunt magna egestas ut. Nunc ut iaculis lorem, ac porttitor risus. Maecenas vel risus finibus, luctus purus in, luctus risus.",
          "author": {
            "username": "Vicente",
            "image": "https://thispersondoesnotexist.com/image",
            "rate": "10",
            "bio": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
          },
          "date": "12/12/2020 18:26"
        },
        {
          "id": 2,
          "title": "Test 1.2",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum elementum augue, eu vestibulum dui venenatis at. In a iaculis quam, id vulputate augue. Quisque hendrerit elementum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ut mi a felis rhoncus convallis. Fusce ultrices cursus leo, ac tincidunt magna egestas ut. Nunc ut iaculis lorem, ac porttitor risus. Maecenas vel risus finibus, luctus purus in, luctus risus.",
          "author": {
            "username": "Vicente",
            "image": "https://thispersondoesnotexist.com/image",
            "rate": "10",
            "bio": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
          },
          "date": "12/12/2020 18:26"
        }
      ]
    const { baseElement, container } = render(<AppContextProvider><NFUCommentList comments={comments} gameID={1}/></AppContextProvider>);
    expect(baseElement).toBeDefined();
    const comments_rendered = container.querySelectorAll('.comment');
    expect(comments_rendered.length).toBe(2);
});

test('Render Label No Comments', () => {
    const comments = []
    const { baseElement, container } = render(<AppContextProvider><NFUCommentList comments={comments} gameID={1}/></AppContextProvider>);
    expect(baseElement).toBeDefined();
    const label_no_comments = container.querySelectorAll('ion-label');
    expect(label_no_comments.length).toBe(1);

})
