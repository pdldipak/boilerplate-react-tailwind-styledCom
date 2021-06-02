import styled from 'styled-components';
import tw from 'twin.macro';

export const Main = styled.main`
  ${tw`text-center`}
  & {
    h1 {
      ${tw`text-6xl m-4`}
    }
  }
`;


export const Button = styled.button`
  ${tw`m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
 
`;