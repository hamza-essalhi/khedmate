import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";


// pagination still need som fix but logic is done 

const Pagination = (props) => {
  const totalPages = props.totalPages;
  const handleClick = props.handleClick;
  const currentPage = props.currentPage;
  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i<4){
        pageNumbers.push(
            <li key={i} className={i === currentPage ? "active" : ""}>
              <button onClick={() => handleClick(i)}>{i}</button>
            </li>
          );
    }
    else if (i>totalPages-3 ){
        pageNumbers.push(
            <li key={i} className={i === currentPage ? "active" : ""}>
              <button onClick={() => handleClick(i)}>{i}</button>
            </li>
          );
    }
    else if (i< (totalPages/2)-3){
        pageNumbers.push(
            <li key={i} className={i === currentPage ? "active" : ""}>
              <button onClick={() => handleClick(i)}>.</button>
            </li>
          );
    }

    
  }
  return (
    <ul>
      {currentPage > 1 ? (
        <li>
            <button onClick={() => handleClick(currentPage - 1)}>
          <BsFillCaretLeftFill></BsFillCaretLeftFill>
        </button>
        </li>
      ) : (
        <></>
      )}
      {pageNumbers}
      {currentPage < totalPages ? (
       <li>
         <button onClick={() => handleClick(currentPage + 1)}>
          <BsFillCaretRightFill></BsFillCaretRightFill>
        </button>
       </li>
      ) : (
        <></>
      )}
    </ul>
  );
};

export default Pagination;
