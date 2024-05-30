import { usePDF } from 'react-to-pdf';

const PrintPDF = () => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    return (
        <div>
            <button onClick={() => toPDF()}>Download PDF</button>
            <div ref={targetRef}>
                Content to be generated to PDF
            </div>
        </div>
    )
}

export default PrintPDF;


// function PrintPDF(){
//     return (
//         <div>
//             <div>
//                 Content to be generated to PDF
//             </div>
//         </div>
//     )
// }
//
// export default PrintPDF;
