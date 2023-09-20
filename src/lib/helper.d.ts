import React, { ReactNode } from 'react'

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>
export type ReplaceProps<Inner extends React.ElementType, P> = Omit<
React.ComponentPropsWithRef<Inner>,
P
> &
P
export interface AsProp<As extends React.ElementType = React.ElementType> {
  as?: As
}
export type PrefixRefForwardingComponent<
  TInitial extends React.ElementType,
  P = unknown
> = <As extends React.ElementType = TInitial>(
    props: React.PropsWithChildren<ReplaceProps<As, AsProp<As> & P>>,
    context?: any
  ) => ReactNode
