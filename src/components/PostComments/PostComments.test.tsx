import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

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
        fireEvent.click(screen.getByText('btn-comentario'));
    })
});