import React, { Component } from "react";
import { interval } from "rxjs";
import { map, addIndex } from "rambda";

class HeroBackground extends Component {
  constructor(props) {
    super(props);

    const { src, duration } = props;
    if (!src) {
      console.error(
        "HeroBackground requires a src prop containing an array of backgrounds"
      );
    }

    if (!duration) {
      throw new Error("missing duration");
    }
    this.state = {
      currentIndex: 0
    };
  }

  componentDidMount = () => {
    this.intervalSub = interval(this.props.duration).subscribe(this.cycleBg);
  };

  componentWillUnmount = () => {
    this.intervalSub &&
      this.intervalSub.unsubscribe &&
      this.intervalSub.unsubscribe();
  };

  cycleBg = () => {
    const { currentIndex } = this.state;
    const { src } = this.props;
    const numFigures = src.length;

    const nextIndex = currentIndex < numFigures - 1 ? currentIndex + 1 : 0;

    this.setState({
      currentIndex: nextIndex
    });
  };

  render() {
    const { currentIndex } = this.state;
    const { src } = this.props;
    const numFigures = src.length;
    const lastIndex = currentIndex === 0 ? numFigures - 1 : currentIndex - 1;

    return src.map((value, index) => {
      return (
        <>
          <figure
            className={index === currentIndex ? "current" : "hidden"}
            style={{
              backgroundImage: `url("${src[index]}")`
            }}
          />
        </>
      );
    });
  }
}

export default HeroBackground;
