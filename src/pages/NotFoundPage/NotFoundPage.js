import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Sorry, there is no such route. Please,click link
      <Link to="/"> Home page</Link> to go back.
    </div>
  );
}
