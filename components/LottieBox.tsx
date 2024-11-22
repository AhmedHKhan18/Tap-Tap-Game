import LottieView from 'lottie-react-native';

export const LottieBox = ({ animate, src, loop, speed, style }:any) => (
  <LottieView
    autoPlay
    loop={loop}
    source={src}
    ref={animate}
    style={style ? style : { width: 150, height: 150 }}
    speed={speed}
  />
);
