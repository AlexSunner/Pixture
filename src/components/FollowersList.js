import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

/**
 * FollowersList component - Displays a list of followers for a given user.
 *
 * @param {number} userId - The ID of the user whose followers are to be displayed.
 * @param {function} onClose - Function to handle the closing of the followers list modal.
 */
const FollowersList = ({ userId, onClose }) => {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Fetch the list of followers when the component mounts or when the userId changes.
   */
  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get(`/profiles/${userId}/followers/`);
        if (response.data && Array.isArray(response.data.results)) {
          setFollowers(response.data.results);
        } else {
          setFollowers([]); // Set an empty array if the response is not as expected
        }
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchFollowers();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Followers</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {followers.map((follower) => (
            <ListGroup.Item key={follower.id}>{follower.owner}</ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};

FollowersList.propTypes = {
  userId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FollowersList;
