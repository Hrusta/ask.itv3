import React, { useState } from "react";
import {AiFillLike, AiFillDislike} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AnswerInput from "./AnswerInput";
import Answer from "./Answer";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface MyProps{
  title: string ;
  key: number;
  id: number; 
  content: string; 
  onDelete: (id: any) => void;
}

function Question(props: MyProps) {


  const [answer, setAnswerr] = useState("");

  function handleChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setAnswerr(event.target.value);
  }

  function submitAnswer(event: { preventDefault: () => void; }) {
    addAnswer(answer);
    setAnswerr("");
    event.preventDefault();
  }


  const [answers, setAnswer] = useState<string[]>([""]);

  function addAnswer(newAnswer: string) {
    setAnswer(prevAnswer => {
      return [...prevAnswer, newAnswer];
    });
  }

  function deleteAnswer(id: number) {
    setAnswer(prevAnswer => {
      return prevAnswer.filter((answerItem, index) => {
        return index !== id;
      });
    });
  }



  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  const id = props.id;

  const [liked, setLike] = useState(false);


  function handleLike() {
    if (liked) {
      setLike(false);
    }
    else {
      setLike(true);
    }
  }




  function handleClick() {
    props.onDelete(props.id);
  }

  return (


    <div className="coverQuestion">

      <div className="titleCover">
        <h1 className="titleQuestion">{props.title}</h1>
      </div>
      <p className="contentQuestion">{props.content}</p>



      <CardActions disableSpacing>
        <IconButton onClick={handleLike} style={{ color: liked ? "black" : "gray" }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick={handleClick}>
          <DeleteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          <div className="divFlex">
            <input
              name="answer"
              placeholder="Answer"
              onChange={handleChange}
              className="answerInput" />
            <button type="button"
              onClick={submitAnswer}
              className="answerButton"
            >Post</button>

          </div>





          {answers.map((answerItem, index) => {
            return (
              <Answer
              key={index}
              content={answerItem}
                />
            );
          })}


        </CardContent>
      </Collapse>

    </div>
  );
}

export default Question;
