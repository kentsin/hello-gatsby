import { graphql } from "gatsby"
import React from "react"

class IndexComponent extends React.Component {
  render() {
    const data1 = this.props.data.SubjectNameControllListXlsTERMS.edges

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="8">Sheet1</th>
            </tr>
            <tr>
              <th>TID</th>
              <th>Chinese</th>
              <th>Portuese</th>
              <th>UDC</th>
              <th>comment</th>
              <th>Related Tid</th>
              <th>English</th>
              <th>EuroVoc</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((row, i) => (
              <tr key={`${row.node.value} ${i}`}>
                <td>{row.node.TID}</td>
                <td>{row.node.CHINESE}</td>
                <td>{row.node.PORTUGUESE}</td>
                <td>{row.node.UDC}</td>
                <td>{row.node.comment}</td>
                <td>{row.node.RELATEDTID}</td>
                <td>{row.node.ENGLISH}</td>
                <td>{row.node.EuroVoc}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    )
  }
}

export default IndexComponent

export const IndexQuery = graphql`
  query {
    allSubjectNameControllListXlsTERMS {
      edges {
        node {
          TID
          CHINESE
          PORTUGUESE
          UDC
          comment
          RELATEDTID
          ENGLISH
          EuroVoc
        }
      }
    }
    
  }
`