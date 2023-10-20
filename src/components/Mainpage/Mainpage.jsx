
import htmlContent from '../Mainpage/index.html';


export default function MyComponent() {
    return (
        <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
    );
}