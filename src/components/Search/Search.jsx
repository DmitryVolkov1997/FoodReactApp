import styled from 'styled-components';
import {setSearch} from '../../store/catalogSlice/catalogSlice';
import {useDispatch, useSelector} from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  margin-top: 4rem;
`

const Input = styled.input`
  padding: 1rem 1.6rem;
  border-radius: .6rem;
  border: 1px solid rgb(226, 232, 240);
  width: 100%;
  transition: border-color .22s ease-in-out, box-shadow .22s ease-in-out;
  font-family: var(--family);
  font-size: var(--fz-sm);

  &:focus {
    border-color: rgb(49, 130, 206);
    box-shadow: rgb(49 130 206) 0px 0px 0px 1px;
  }
`
const Button = styled.button`
  padding: 1rem;
  background: rgb(0, 160, 220);
  color: #fff;
  font-family: var(--family);
  font-weight: var(--fw-medium);
  font-size: var(--fz-sm);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color .22s ease-in-out;

  &:hover {
    background-color: #2b6cb0;
  }
`
const Search = ({cb = Function.prototype}) => {
    const dispatch = useDispatch()
    const {search} = useSelector(state => state.catalog)

    const handleInput = (e) => {
        dispatch(setSearch({search: e.target.value}))
        cb(e.target.value)
    }

    const handleSubmit = (e) => {
        cb(search)
    }

    const handleKey = (e) => {
        if (e.code === 'Enter') handleSubmit()
    }

    return (
      <Wrapper>
          <Input type="search" value={search} placeholder="Поиск" onChange={handleInput} onKeyDown={handleKey}/>
          <Button onClick={handleSubmit}>Найти</Button>
      </Wrapper>
    );
};

export default Search;
