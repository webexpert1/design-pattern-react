import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`

const Paned = styled.div`
    flex: ${props => props.weight};
`

export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1

    // left: Left,
    // right: Right,
    // leftWeight = 1,
    // rightWeight = 1
}) => {
    const [ left, right ] = children;
    console.log('children', children)
    return (
        <Container>
            <Paned weight={leftWeight}>
                { left }
            </Paned>
            <Paned weight={rightWeight}>
                { right }
            </Paned>
        </Container>


        // <Container>
        // <Paned weight={leftWeight}>
        //     <Left />
        // </Paned>
        // <Paned weight={rightWeight}>
        //     <Right />
        // </Paned>
        // </Container>
    )
}