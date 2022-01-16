import { ComponentProps } from 'react';

import * as S from './styles';

export type ButtonProps = ComponentProps<typeof S['Container']>;

export const Button = ({ children, ...props }: ButtonProps) => (
    <S.Container {...props}>{children}</S.Container>
);
