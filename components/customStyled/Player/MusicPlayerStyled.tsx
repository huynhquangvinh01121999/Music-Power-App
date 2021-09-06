import styled from "styled-components";

const MusicPlayerStyled = styled.div`
  position: fixed;
  bottom: 0;
  height: 105px;
  background-color: #120c1c;
  user-select: none;
  width: 100%;
  border: 1px solid #221633;

  audio::-webkit-media-controls-panel {
    background-color: #170f23;
    color: #a0276e;
    padding: 20px;
    border-radius: -20%;
  }

  audio::-webkit-media-controls-current-time-display {
    color: white;
  }

  audio::-webkit-media-controls-time-remaining-display {
    color: white;
  }

  audio::-webkit-media-controls-play-button {
    -webkit-appearance: media-play-button;
    display: flex;
    flex: none;
    border: none;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    margin-right: 12px;
    padding: 0;
    background-color: white;
    border-radius: 50%;
  }

  audio::-webkit-media-controls-timeline {
    -webkit-appearance: media-slider;
    display: flex;
    flex: 1 1 auto;
    margin: 0px 10px 0px 15px;
    padding: 0;
    background-color: white;
  }

  @media screen and (max-width: 620px) {
    margin: 0px 5px 0px 0px;
    height: 180px;
    border: 1px solid #221633;
    width: 100%;
  }

  .img_player {
    border-radius: 50%;
    border: 1.5px solid white;
    margin-left: 200px;
    display: inline-block;
    animation: gyrate 2s linear 0s infinite;
    animation-duration: 6s;
    @media screen and (max-width: 620px) {
      display: none;
    }
  }

  @-webkit-keyframes gyrate {
    from {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
    }
  }

  @keyframes gyrate {
    from {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
    }
  }
  .info_player {
    width: 70%;
    height: 100px;
    display: inline-block;
    margin-left: -20px;
    word-wrap: break-word !important;
    @media screen and (max-width: 620px) {
      height: 120px;
      position: absolute;
    }
    .audio_player {
      margin-top: 20px;
      margin-left: 30px;
      border: 0.2px solid white;
      width: 70%;
      border-radius: 50px;
      @media screen and (max-width: 420px) {
        width: 90%;
        border-radius: 50px;
        margin: 0 auto;
        margin-top: -5px;
        margin-left: 0px;
      }
      @media screen and (max-width: 767px) {
        width: 90%;
        margin-top: 10px;
        margin: 0 auto;
        margin-left: 0px;
      }
    }
    h3 {
      width: 70%;
      text-align: center;
      margin-top: 10px;
      margin-bottom: -15px;
      outline: none;
      color: rgb(231, 221, 221);
      font-size: 22px;
      font-weight: 600;
      @media screen and (max-width: 767px) {
        height:48px;
        font-size: 18px;
        width: 90%;
        margin-bottom: 0px;
      }
      span {
        color: #848189;
        font-size: 16px;
        word-wrap: break-word !important;
      }
    }
  }
`;

export default MusicPlayerStyled;