import styled from 'styled-components';

export const HeaderWrapper = styled.div`
padding: 20px 30px;
background-color: #f2efeb;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

h1 {
  color: #333;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 30px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.navbar {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-weight: bold;
  color: #333;
  font-size: 22px;
  text-decoration: none;
  margin-right: 50px;
}

.navbar-toggler {
  border: none;
  outline: none;
  cursor: pointer;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-item {
  list-style: none;
}

.nav-link {
  color: #555;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #007bff;
}

.navbar-text {
  color: #777;
  font-size: 14px;
}
`;
