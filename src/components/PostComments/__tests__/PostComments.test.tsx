import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar quatro comentários', () => {
        render(<PostComment />);
        
        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'Este é o primeiro comentário! ;D',
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'));

        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'Cheguei em segundo aqui, hein!',
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'));

        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'Como funciona isso aqui?',
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'));

        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'Tô só testando mesmo XD'
                ,
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'));

        expect(screen.getAllByTestId('commentario').length).toBe(4);
    })
});