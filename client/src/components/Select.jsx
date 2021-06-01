import { Form } from "react-bootstrap";
import useDataApi from "../utils/useDataApi";

const Select = props => {
  const { series, setSeries } = props;
  const [data, isLoading, isError, doFetch] = useDataApi(
    "http://localhost:3002/series",
    []
  );

  const handleChange = e => {
    e.preventDefault();
    setSeries(e.currentTarget.value);
    console.log("setting current series");
  };

  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <Form>
            <Form.Group>
              <Form.Label>Select Series</Form.Label>
              <Form.Control
                as="select"
                size="sm"
                custom
                onChange={handleChange}
              >
                {data.map(element => (
                  <option
                    key={element.toString()}
                    selected={element === series}
                  >
                    {element}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </>
      )}
    </>
  );
};

export default Select;
