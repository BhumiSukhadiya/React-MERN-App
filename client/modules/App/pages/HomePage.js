import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './HomePageStyle.css';
import { Banner, Heading, Input, Radio, Textarea, Checkbox, Select, Switch, Table, Button, ButtonCircle, Space } from 'rebass';
class HomePage extends Component {
  componentDidMount() {
    if (localStorage.getItem('token') !== null) {
      browserHistory.push('/userhome');
    }
    /* if (localStorage.getItem('token')== null) {
     alert('Please login to view Homepage');
     browserHistory.push('/login');
     }else{
     console.log('yrrrrrr');
     }
     }*/
  }

  render() {
    return (
      <div style={{ padding: 100 }}>
        <h1>HomePage</h1>

        <Banner
          align="center"
          backgroundImage="https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg"
        >
          <Heading
            level={2}
            size={0}
          >
            <img src="./images/loading_image.gif" alt="title" width="200px" height="200px" />
          </Heading>
        </Banner>

        <Switch
          mr={2}
          onClick={function () {
          }}
        />
        <ButtonCircle title="Like">
          Test
        </ButtonCircle>
        <Table
          data={[
            [
              'Hamburger',
              'Beef',
              'Onion',
              'Bun',
            ],
            [
              'Pizza',
              'Pork',
              'Tomato',
              'Crust',
            ],
            [
              'Corndog',
              'Pork',
              'Corn',
              'Cornbread',
            ],
            [
              'Hot Dog',
              'Pork',
              'Peppers',
              'Bun',
            ],
          ]}
          headings={[
            'Name',
            'Meat',
            'Vegetable',
            'Carb',
          ]}
        />

        <br />
        <div width="200px">
          <form>
            <Input
              name="input"
              label="Input"
            />
            <Select
              name="select"
              label="Select"

              options={[
                { value: 2, children: 'Two' },
                { value: 4, children: 'Four' },
                { value: 8, children: 'Eight' },
                { value: 16, children: 'Sixteen' },
                { value: 32, children: 'Thirty-Two' },
                { value: 64, children: 'Sixty-Four' },
                { value: 128, children: 'One Hundred Twenty-Eight' },
                { value: 256, children: 'Two Hundred Fifty-Six' },
              ]}
            />
            <Radio
              name="radio1"
              value="radio1"
              label="Radio 1"
            />
            <Radio
              name="radio1"
              value="radio2"
              label="Radio 2"
            />
            <Textarea
              name="textarea"
              label="Textarea"
            />
            <Checkbox
              mb={2}
              name="checkbox"
              label="Checkbox"
            />
            <Button children="Hello" />
            <Space />
            <Button theme="secondary" children="Nope" />
          </form>
        </div>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sollicitudin nibh quis volutpat.
          Quisque et pulvinar mi. Maecenas luctus finibus magna, quis blandit risus consectetur at. Quisque molestie
          orci nibh, nec feugiat turpis finibus vel. Proin gravida ut libero eget suscipit. Ut eleifend egestas nisl id
          pharetra. Donec ac diam auctor, convallis nisi ut, aliquet metus.
          In id libero viverra, tempor velit ac, laoreet purus. Praesent ac tellus in nulla consectetur efficitur.
          Aliquam tempus metus eget lacus ultricies, ut congue risus pretium. Praesent dignissim metus vel posuere
          finibus. Duis faucibus purus id dui porta, nec cursus turpis iaculis. Fusce lobortis eleifend cursus.
          Suspendisse viverra urna et efficitur ultricies. Aenean pretium elit sit amet placerat facilisis. Mauris non
          nisl mauris. Cras sed tristique arcu, et blandit tellus. Donec et tincidunt libero, sit amet vulputate felis.
          Ut sagittis semper velit, sed aliquam nisl interdum sodales. Integer posuere sodales arcu sit amet egestas.
          Aliquam vel mattis enim. Suspendisse consequat lorem ac ornare convallis.In pulvinar dui elementum, facilisis
          ipsum eget, aliquam erat. Quisque arcu ante, auctor eu molestie non,
          porta feugiat dui. Vivamus dictum erat ac lorem fermentum dictum. Vivamus justo quam, sollicitudin vel
          hendrerit a, convallis ut magna. Aenean tristique, arcu at interdum consectetur, felis tellus lobortis odio,
          eu ultrices nisi nulla id tortor. Proin pretium tellus id sollicitudin cursus. Ut vitae interdum quam. Sed
          fringilla erat consequat mauris molestie, eu dignissim dolor consectetur. Integer vel nulla nec turpis
          sollicitudin fringilla eget nec eros. Pellentesque vitae velit eget odio eleifend malesuada.Integer neque
          velit, vulputate maximus ante sit amet, tincidunt vehicula sapien. Nulla augue velit, luctus eget euismod ac,
          ornare ac arcu. Nam imperdiet ultrices feugiat. Maecenas auctor, erat eu porttitor hendrerit, quam nunc congue
          sapien, sed efficitur eros magna porta orci. Etiam in placerat metus. Curabitur pretium posuere dignissim.
          Nulla lacus nisl, rhoncus sit amet gravida ac, interdum ac turpis. Sed facilisis sit amet elit a scelerisque.
          Proin vulputate tristique magna eget venenatis. Fusce lobortis id elit vitae euismod. Pellentesque cursus quis
          arcu pretium lobortis. Nulla facilisi. Mauris id sollicitudin lacus. Integer placerat ex risus, ac mollis
          justo porttitor non. Nullam
          bibendum pretium efficitur. Morbi quis imperdiet urna, sit amet elementum neque. Aliquam at mollis leo.
          Suspendisse venenatis velit convallis neque fringilla mattis. Nullam at sagittis eros. Etiam lorem turpis,
          convallis ut varius id, semper a justo. Sed luctus luctus nisi, eu lobortis massa accumsan sed. Donec
          tristique, augue in vehicula blandit, ligula elit sagittis urna, finibus tristique odio velit eget purus.
          Aliquam condimentum lectus et sem molestie facilisis. Duis ac mattis sem. Morbi dapibus eu orci hendrerit
          tempus.
        </p>

      </div>
    );
  }
}
function mapStateToProps(store) {
  return {
    authentication: store.authentication,
  };
}
export default connect(mapStateToProps)(HomePage);
