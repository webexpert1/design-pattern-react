
import styled from 'styled-components';

const Container = styled.div`
  display: flex
`

const Pane = styled.div`
   flex: ${props => props.weight}
`

export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1
}) => {
    const [ left, right ] = children;
    console.log(left, right)
    return(
        <Container>
            <Pane weight={leftWeight}>
                 {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    )
}



// Usage
/* <SplitScreen leftWeight={1} rightWeight={3}>
    <LeftComponent />
    <RightComponent />
</SplitScreen> */

// const RightComponent = () => {
//     return (
//       <div style={{backgroundColor: 'red'}}>Right</div>
//     )
//   }
  
//   const LeftComponent = () => {
//     return (
//       <div style={{backgroundColor: 'green'}}>Left</div>
//     )
//   }