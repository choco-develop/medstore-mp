/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  SvgIcon, Collapse, Checkbox,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import { useSpring, animated } from '@react-spring/web';

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

export function CloseSquare(props) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(20px,0,0)',
    },
    to: {
      opacity: props.in ? 1 : 0, //eslint-disable-line
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`, //eslint-disable-line
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool, //eslint-disable-line
};

const StyledTreeItem = styled((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} className="font-serif text-gray-700" />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    opacity: 0.95,
    color: 'gray',
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

export default function CustomizedTreeView() {
  return (
    <TreeView
      aria-label="customized"
      defaultExpanded={['1', '11']}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<Checkbox />}
      className="w-full"
      sx={{
        height: 564, flexGrow: 1, maxWidth: 400, overflowY: 'auto',
      }}
    >
      <StyledTreeItem nodeId="1" label="Ultrasound Probes">
        <StyledTreeItem nodeId="2" label="Convex Probes">
          <StyledTreeItem nodeId="18" label="Concave" />
        </StyledTreeItem>
        <StyledTreeItem nodeId="3" label="Linear Probes" />
        <StyledTreeItem nodeId="4" label="4D Cardio Probes" />
        <StyledTreeItem nodeId="5" label="TEE Probes" />
      </StyledTreeItem>
      <StyledTreeItem nodeId="6" label="Doppler Ultrasound">
        <StyledTreeItem nodeId="7" label="Fetal" />
        <StyledTreeItem nodeId="8" label="Vascular" />
      </StyledTreeItem>
      <StyledTreeItem nodeId="9" label="Transient elastography">
        <StyledTreeItem nodeId="10" label="Transient elastography" />
      </StyledTreeItem>
      <StyledTreeItem nodeId="11" label="Ultrasound machine accessories">
        <StyledTreeItem nodeId="12" label="Ultrasound Printers" />
        <StyledTreeItem nodeId="13" label="VCR & DVD" />
        <StyledTreeItem nodeId="14" label="Power Supplies for Ultrasound" />
        <StyledTreeItem nodeId="15" label="Video Cassette Recorders" />
      </StyledTreeItem>
      <StyledTreeItem nodeId="16" label="Portable Ultrasound" />
      <StyledTreeItem nodeId="17" label="Ultrasound gels" />
    </TreeView>
  );
}
