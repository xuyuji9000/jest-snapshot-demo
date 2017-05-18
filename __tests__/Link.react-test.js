'use strict'

import React from 'react'
import Link from '../Link.react'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
      const tree = renderer
        .create(<Link page="http://www.instagram.com">Instagram</Link>)
        .toJSON();
      expect(tree).toMatchSnapshot();
})
