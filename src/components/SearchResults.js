import React from "react";
import moment from "moment";

function SearchResults(props) {
  const { results } = props;
  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          {Object.keys(results[0]).map((element, index) => (
            <th scope="col" key={`th-${index}`}>
              {element}
            </th>
          ))}
          <th scope="col">number of nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={`tr-${index}`}>
            {Object.values(result).map((element, index) => (
              <td key={`td-${index}`}>{element}</td>
            ))}
            <td key={`duration-${index}`}>{`Has a booking for ${moment(
              result.checkOutDate,
              "YYYY-MM-DD"
            ).diff(moment(result.checkInDate), "days")} nigths.`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
