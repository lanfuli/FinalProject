/*
 * File: 
 * This is the logic of our game. For now, this is very simple.
 */
/*jslint node: true, vars: true */
/*global ClassExample, matrix  */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

var kBoundTol = 0.2;
// check if (wcx, wcy) is close enough to (px, py) by kBountTol
ClassExample.prototype.withInBound = function (p, wc) {
    return ( ((p[0] - kBoundTol) < wc[0]) && (wc[0] < (p[0] + kBoundTol)) &&
             ((p[1] - kBoundTol) < wc[1]) && (wc[1] < (p[1] + kBoundTol)) );
};

// define a hit as a WC pos within 0.2 from the center position
ClassExample.prototype.detectMouseOver = function (wcX, wcY, leftClick) {
    var posEcho = wcX.toFixed(2).toString() + " " + wcY.toFixed(2).toString() + " :";
    var overObj = "Nothing";
    
//    this.mXfSq.getXform().setPosition(wcX, wcY);
//    
//    var wcPos = [wcX, wcY];
//    // 1. We will detect the based rotating head
//    var parentXf = this.mParent.getXform();
//    var parentMat = parentXf.getXform();
//    var parentPos = parentXf.getPosition();
//    this.mHeadSq.getXform().setPosition(parentPos[0], parentPos[1]);
//    if (this.withInBound(parentPos, wcPos)) {
//        overObj = "Parent Head";
//        if (leftClick){
//            this.drawManipulator = true;
//            this.moveManipulator(parentPos);           
//            if(this.mManipulator.getSceneNode() !== null &&
//                this.mManipulator.getSceneNode() !== this.mParent){
//                    this.mManipulator.removeSceneNode();
//                }
//            this.mManipulator.setSceneNode(this.mParent);
//        }
//    }
//
//    // 2. Left, lower arm, pulsing blue rectangle
//        var m = mat4.create();
//        var leftArmMat = this.mLeftChild.getXform().getXform(); // a matrix
//        mat4.multiply(m, parentMat, leftArmMat);
//
//        var pulsingBluePos = this.mLeftChild.getRenderableAt(4).getXform().getPosition();
//        var bluePosWC = vec2.fromValues(0, 0);
//
//        vec2.transformMat4(bluePosWC, pulsingBluePos, m);
//        this.mBlueSq.getXform().setPosition(bluePosWC[0], bluePosWC[1])
//        if (this.withInBound(bluePosWC, wcPos)) {
//            overObj = "Lower Arm Blue Square:";
//            if (leftClick){
//                this.drawManipulator = true;
//                this.moveManipulator(bluePosWC);
//                if(this.mManipulator.getSceneNode() !== null &&
//                        this.mManipulator.getSceneNode() !== this.mLeftChild){
//                    this.mManipulator.removeSceneNode();
//                }
//                this.mManipulator.setSceneNode(this.mLeftChild);
//            }
//        }
////    
//    // 3. Left, upper arm (tip) the rotating red square
//        m = mat4.create();  // <-- reuse the matrix
//        var topArmMat = this.mTopChild.getXform().getXform();
//        mat4.multiply(m, leftArmMat, topArmMat); // top first, then, left
//        mat4.multiply(m, parentMat, m);  // parent is last
//        
//        var rotateRedPos = this.mTopChild.getRenderableAt(1).getXform().getPosition();
//        var redPosWC = vec2.fromValues(0, 0);
//        
//        vec2.transformMat4(redPosWC, rotateRedPos, m);
//        this.mRedSq.getXform().setPosition(redPosWC[0], redPosWC[1]);
//        if (this.withInBound(redPosWC, wcPos)) {
//            overObj = "Top Red Rec:";
//            if (leftClick){
//                this.drawManipulator = true;
//                this.moveManipulator(redPosWC);
//                
//                if(this.mManipulator.getSceneNode() !== null &&
//                        this.mManipulator.getSceneNode() !== this.mTopChild){
//                    this.mManipulator.removeSceneNode();
//                }
//                this.mManipulator.setSceneNode(this.mTopChild);
//            }
//        }
//        
//        var mPos = this.mManipulator.getXform().getPosition();
//        if(this.withInBound([mPos[0], mPos[1] + 1], wcPos)){
//            overObj = "Rotation Knob";
//        }
//        else if(this.withInBound([mPos[0] + 1, mPos[1]], wcPos)){
//            overObj = "Scale Knob";
//        }  
//
      return posEcho + overObj;
};