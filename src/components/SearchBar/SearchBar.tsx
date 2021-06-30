import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
interface SearchBarProps {
    filter: string;
    setFilter: (input: string) => void
}
const SearchBar: React.FC<SearchBarProps> = ({ filter, setFilter }) => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value)
    }
    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                value={filter}
                onChange={handleChange}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
            />
        </InputGroup>
    )
}

export default SearchBar
