import styled from "styled-components";

const Wrapper = styled.div`
  .logo-link {
    display: flex;
    flex-direction: row;
  }

  .logo-link:hover {
    transition: 500ms;
    filter: invert(52%) sepia(39%) saturate(312%) hue-rotate(356deg)
      brightness(97%) contrast(85%);
  }

  .logo-img {
    margin-right: 25px;
  }

  .logo-title {
    font-family: "Forum-Regular";
    font-weight: 400;
    font-size: 28px;
    line-height: 1.11;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--text-white);
  }
`;

export default Wrapper;
